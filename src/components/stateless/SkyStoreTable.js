import React from 'react';
import { Table } from "react-bootstrap";

export const SkyStoreTable = (props) =>
<Table className="bill__sky-store-table" responsive>
  <thead>
    <tr>
      <th>Title</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    {props.items.map((item, index) =>
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.cost}</td>
        </tr>
    )}
  </tbody>
</Table>;