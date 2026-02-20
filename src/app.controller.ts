import { Controller, Post, Body, Param, Headers, UnauthorizedException } from '@nestjs/common';

@Controller('devices')
export class AppController {
  
  @Post(':id/readings')
  async receiveReadings(
    @Param('id') id: string,
    @Body() data: { temperature: number; humidity: number },
    @Headers('authorization') auth: string // <--- Cambiamos Header por Headers
  ) {
    // 1. Seguridad: Verificar el Token que definiste en el .env
    const token = auth?.replace('Bearer ', '');
    
    if (token !== process.env.DEVICE_TOKEN) {
      throw new UnauthorizedException('Token de dispositivo inválido');
    }

    // 2. Aquí es donde se conectará con Supabase pronto
    console.log(`Dispositivo ${id} enviando: T=${data.temperature}, H=${data.humidity}`);
    
    return { status: 'success', message: 'Lectura recibida correctamente' };
  }
}