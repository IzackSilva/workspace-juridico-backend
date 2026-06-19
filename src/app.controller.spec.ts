// Importa utilitários do NestJS para criação de módulos de teste
import { Test, TestingModule } from '@nestjs/testing';
// Importa o controller principal da aplicação a ser testado
import { AppController } from './app.controller';
// Importa o serviço principal da aplicação utilizado pelo controller
import { AppService } from './app.service';

// Bloco principal de testes do AppController
describe('AppController', () => {
  // Variável que armazena a instância do controller para uso nos testes
  let appController: AppController;

  // Executado antes de cada teste: cria e configura o módulo de teste
  beforeEach(async () => {
    // Cria um módulo de teste registrando o controller e o serviço necessários
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // Obtém a instância do AppController a partir do módulo compilado
    appController = app.get<AppController>(AppController);
  });

  // Bloco de testes para a rota raiz do control
  describe('root', () => {
    // Verifica se o método getHello() retorna a string esperada 'Hello World!'
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
