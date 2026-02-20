import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DevicesModule } from './devices/devices.module'; // Agrega esta línea
import { ReadingsModule } from './readings/readings.module'; // Agrega esta línea

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DevicesModule, // Agrégalo aquí
    ReadingsModule, // Agrégalo aquí
  ],
})
export class AppModule {}