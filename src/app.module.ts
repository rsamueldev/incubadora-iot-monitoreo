import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DevicesModule } from './devices/devices.module'; // Agrega esta línea
import { ReadingsModule } from './readings/readings.module'; // Agrega esta línea
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DevicesModule, // Agrégalo aquí
    ReadingsModule, SupabaseModule, // Agrégalo aquí
  ],
})
export class AppModule {}