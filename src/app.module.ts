import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // <-- Importe o módulo
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [
    // Carrega o .env e disponibiliza o process.env para todo o app
    ConfigModule.forRoot({ isGlobal: true }), 
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}