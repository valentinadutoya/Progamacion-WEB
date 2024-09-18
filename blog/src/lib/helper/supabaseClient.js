import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://ylqlntetbfefwbghfjux.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlscWxudGV0YmZlZndiZ2hmanV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzkwNTIsImV4cCI6MjA0MjI1NTA1Mn0.tUAytNpLPal8YQ-TXtmtuZtsfADkuB64Ea65axIHOns"
);

export default supabase;