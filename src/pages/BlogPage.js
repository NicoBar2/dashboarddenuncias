import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Button, Container, Stack, Typography, TableBody,Avatar,
  Card,
  Checkbox,
  IconButton,
  MenuItem,
  Paper,
  Popover,
  Table,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow, } from '@mui/material';
import Iconify from '../components/iconify';
import denuncias from 'src/_mock/blog';



const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

export default function BlogPage() {
 
    const page = 0; // Replace this with the correct page number
  const rowsPerPage = 10; // Replace this with the correct number of rows per page

  useEffect(() => {
    console.log("ole")
    denuncias()
      .then(data => {
        if (data) {
          console.log("sapos2")
          setDenuncias(data); // Guardar los datos obtenidos en el estado
        } else {
          // Manejar el error o hacer algo en caso de que no se puedan obtener los datos
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        // Manejar el error o hacer algo en caso de que no se puedan obtener los datos
      });
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard: Denuncias | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Denuncias
          </Typography>
        </Stack>

        <TableBody>
          {denuncias?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            const { _id, tituloDenuncia, idDenunciante, descripcion, categoria, estado, isDeleted, fechaHora, evidencia } = row;
        
            return (
              <TableRow key={_id}>
                {}
              </TableRow>
            );
          })}
        </TableBody>
      </Container>
    </>
  );
}
