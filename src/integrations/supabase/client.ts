// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://priskwmqftpvinpobgfb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByaXNrd21xZnRwdmlucG9iZ2ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5ODQwOTUsImV4cCI6MjA1MDU2MDA5NX0.HmtQCdYxnBctFJ8miPrJupX1xtvzPRm_wF2yKXIQKqI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);