const { createClient } = require('@supabase/supabase-js');

// Evita que falle al arrancar si no hay variables de entorno configuradas
const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'placeholder-key';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;