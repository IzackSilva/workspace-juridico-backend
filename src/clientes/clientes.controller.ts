import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Prisma } from '@prisma/client';

@Controller('clientes')
export class ClientesController {
  
  // Injeção de Dependência: Conectando o Garçom à Cozinha
  constructor(private readonly clientesService: ClientesService) {}

  // Rota para RECEBER os dados do Front-end e CADASTRAR
  @Post()
  async criar(@Body() dados: Prisma.ClienteCreateInput) {
    return this.clientesService.criar(dados);
  }

  // Rota para DEVOLVER a lista de clientes para o Front-end
  @Get()
  async listarTodos() {
    return this.clientesService.listarTodos();
  }
}