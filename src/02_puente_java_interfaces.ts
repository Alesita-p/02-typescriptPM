/**
 * ============================================================================
 * 🥊 RETO 02: De Clases Java POO a Interfaces TypeScript & Duck Typing
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 */

// ============================================================================
// PASO 1: Define la interface `PerfilUsuario` en TypeScript
// ============================================================================
// TODO: Define la interface `PerfilUsuario` con los siguientes campos y modificadores:
// - `id`: de tipo string e INMUTABLE (usa `readonly`)
// - `nombreCompleto`: de tipo string
// - `correo`: de tipo string
// - `telefono`: de tipo string y OPCIONAL (usa `?`)
// - `rol`: de tipo literal `"ADMIN" | "DOCENTE" | "ESTUDIANTE"`

export interface PerfilUsuario {
  readonly id: string;
  nombreCompleto: string;
  correo: string;
  telefono?: string;
  rol: "ADMIN" | "DOCENTE" | "ESTUDIANTE";
}

export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "Daniela Alejandra Pesantez Sosa", 
  correo: "estudiante@est.salesianos.edu.ec",
  rol: "ESTUDIANTE"
};

/**
 * TODO: Implementa `formatearPerfilUsuario`.
 * Formato requerido:
 * `[PERFIL] ID (ROL): NOMBRE - CORREO`
 * (Ejemplo: `[PERFIL] UETS-2026-001 (ESTUDIANTE): Carlos Andrade - carlos@est.salesianos.edu.ec`)
 */
export function formatearPerfilUsuario(usuario: PerfilUsuario): string {
  // 👇 TODO: Escribe tu lógica con Template Strings y reemplaza el return "":
  return `[PERFIL] ${usuario.id} (${usuario.rol}): ${usuario.nombreCompleto} - ${usuario.correo}`;
}

// ============================================================================
// PASO 2: Interface `ProductoItem` y Función de Descuento
// ============================================================================
// TODO: Define la interface `ProductoItem` con:
// - `id`: string (readonly)
// - `titulo`: string
// - `precio`: number
// - `disponible`: boolean
// - `descuentoPorcentaje`: number (opcional ?)

export interface ProductoItem {
  readonly id: string;
  titulo: string;
  precio: number;
  disponible: boolean;
  descuentoPorcentaje?: number;
}

export interface ProductoItem {
  readonly id: string;
  titulo: string;
  precio: number;
  disponible: boolean;
  descuentoPorcentaje?: number;
}

  export function calcularPrecioFinal(producto: ProductoItem): number {
  if (!producto.disponible) {
    return 0;
  }

  let precioFinal = producto.precio;

  if (producto.descuentoPorcentaje && producto.descuentoPorcentaje > 0) {
    const descuento = producto.precio * (producto.descuentoPorcentaje / 100);
    precioFinal = producto.precio - descuento;
  }

  return Number(precioFinal.toFixed(2));
}
