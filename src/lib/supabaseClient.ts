import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://ovwnbkkdmhsueeyweuxb.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92d25ia2tkbWhzdWVleXdldXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNjg2NzcsImV4cCI6MjA0NDY0NDY3N30.cK9RsSncGhTm7qZ2FXZv0nf35DrgGTbZ0KgatSCe-6E'
);
