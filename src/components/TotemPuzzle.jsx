import React from "react";
import {Component} from "react";
import TotemTable from "./TotemTable";
import TotemWinningScreen from "./TotemWinningScreen";

const getTableFromConfig = (config) => {
    const rows = [];

    config.forEach(row => {
        const values = row.split("");
        const columns = [];

        values.forEach(value => {
            const bool = value === "1";
            columns.push({value: bool});
        });

        rows.push({columns: columns});
    });

    return {rows};
};

class TotemPuzzle extends Component{
    constructor(props) {
        super(props);

        const table = getTableFromConfig(props.config);

        this.state = {
            origin: table,
            table: table,
            solved: false
        };
    }

    reset = () => {
        const table = {...this.state.origin};
        this.setState({table, solved: false});
    };

    toggleTotem = (table, ri, ci) => {
        try{
            table.rows[ri].columns[ci].value = !table.rows[ri].columns[ci].value;
        }catch(ex){}
    };

    toggleTotems = (ric, cic) => {
        let {table} = JSON.parse(JSON.stringify(this.state)),
            ria = ric - 1, rib = ric + 1, cil = cic - 1, cir = cic + 1;

        this.toggleTotem(table, ric, cic);
        this.toggleTotem(table, ria, cic);
        this.toggleTotem(table, rib, cic);
        this.toggleTotem(table, ric, cil);
        this.toggleTotem(table, ric, cir);

        return table;
    };

    checkIfSolved = (table) => {
        return !table.rows.some(row => {
            return row.columns.some(column => {
                return column.value === true;
            });
        });
    };

    onClickHandler = (ric, cic) => {
        const table = this.toggleTotems(ric, cic);
        const solved = this.checkIfSolved(table);
        this.setState({table, solved});
    };

    render(){
        return (
            <div className="">
                <h3>Totem Puzzle - React-App</h3>

                <TotemTable
                    table={this.state.table}
                    onClickHandle={this.onClickHandler}
                />

                <div className="row justify-content-center">
                    <div className="col">
                        <div
                            className="btn btn-outline-info"
                            onClick={this.reset}
                        >reset</div>
                    </div>
                </div>

                <TotemWinningScreen
                    show={this.state.solved}
                    onClickHandle={this.reset}
                />
            </div>
        );
    };
}

export default TotemPuzzle;
