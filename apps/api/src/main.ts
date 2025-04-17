import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Enable CORS
	app.enableCors();

	// Global validation pipe
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transform: true,
			forbidNonWhitelisted: true
		})
	);

	// API prefix
	app.setGlobalPrefix('api');

	// Swagger documentation
	const config = new DocumentBuilder()
		.setTitle('Beverage Order System API')
		.setDescription('API documentation for the Beverage Order System')
		.setVersion('1.0')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api/docs', app, document);

	// Start the server
	const port = process.env.PORT || 4000;
	await app.listen(port, '0.0.0.0');
	console.log(`Application is running on: http://0.0.0.0:${port}`);
}

bootstrap();
