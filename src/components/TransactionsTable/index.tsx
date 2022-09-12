import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



export function TransationsTable() {


return (
<Container>
    <table>
    <thead>
        <tr>
        <th>T+itulo</th>
        <th>Valor</th>
        <th>Categoria</th>
        <th>Data</th>
        </tr>
    </thead>
    <tbody>
        {transactions.map((transaction) => {
        return (
            <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                    {transaction.createdAt}
                </td>
            </tr>
        );
        })}
    </tbody>
    </table>
</Container>
);
}
