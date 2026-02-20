import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
  private supabase: SupabaseClient;
  private readonly logger = new Logger('SupabaseConnection'); 

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_KEY!
    );
  }

  async onModuleInit() {
    try {
      // Hacemos una consulta y ligera para validar la conexión
      const { data, error } = await this.supabase.from('devices').select('id').limit(1);
      
      if (error) throw error;

      this.logger.log('Conexion exitosa con el servidor de Supabase');
    } catch (err) {
      this.logger.error('Error de conexion con Supabase: Verifique las llaves en el archivo .env');
      console.error(err.message);
    }
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}