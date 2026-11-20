import EmpleadosBase from "../AdminDasboard/Empleados";

// La Contadora solo puede VER los empleados (sin agregar, editar ni eliminar).
export default function Empleados() {
  return <EmpleadosBase esAdmin={false} />;
}