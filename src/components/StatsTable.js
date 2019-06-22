import React from 'react';
import { Table, TableRow, TableCell, TableBody } from '@material-ui/core';

export default function StatsTable(props) {
  return (
    <Table size='small'>
      <TableBody>
        <TableRow>
          <TableCell>Speed</TableCell>
          <TableCell align='right'>{props.speed}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Attack</TableCell>
          <TableCell align='right'>{props.attack}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Defense</TableCell>
          <TableCell align='right'>{props.defense}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Special Attack</TableCell>
          <TableCell align='right'>{props.specialAttack}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Special Defense</TableCell>
          <TableCell align='right'>{props.specialDefense}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>HP</TableCell>
          <TableCell align='right'>{props.hp}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}