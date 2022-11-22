import { createClient } from '@supabase/supabase-js';

const PROJECT_URL ='https://tloyzvoifrngskhlyoqd.supabase.co'
const PUBLIC_KEY =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb3l6dm9pZnJuZ3NraGx5b3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwNTQwMDMsImV4cCI6MTk4NDYzMDAwM30.l30aM_8a5YpYstsWi95EQ0On-M3LuiXRwGjhk7JoDvk'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function VideoService(){
    return{
        getAllVideo(){
            return supabase.from("video").select("*")
        }
    }
}