import React from "react";
import TotemButton from "./TotemButton";

const TotemTable = ({ table, onClickHandle }) => {
    return (
        <table>
            <tbody>
                {table.rows.map((row, ri) => {
                    return (
                        <tr key={"row" + ri}>
                            {row.columns.map((column, ci) => {
                                return (
                                    <td key={"column" + ri + ci}>
                                        <TotemButton
                                            state={column.value}
                                            onClickHandle={() => {
                                                onClickHandle(ri, ci)
                                            }}
                                        />
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default TotemTable
