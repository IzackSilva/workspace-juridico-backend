import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

// Instanciamos o Prisma para o nosso serviço ter acesso ao banco
const prisma = new PrismaClient();

@Injectable()
export class ClientesService {
  // Método para CADASTRAR um novo cliente
  async criar(dados: Prisma.ClienteCreateInput) {
    const novoCliente = await prisma.cliente.create({
      data: dados,
    });

    return novoCliente;
  }

  // Método para LISTAR todos os clientes cadastrados
  async listarTodos() {
    const clientes = await prisma.cliente.findMany();
    return clientes;
  }
}
