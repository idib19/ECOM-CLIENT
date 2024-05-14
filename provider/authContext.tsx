import { createContext } from "react";
import { auth } from "@clerk/nextjs"; //server components, route handlers, server actions
import { useUser } from "@clerk/nextjs"; // client components 
import { useAuth } from "@clerk/nextjs"; // client compoenents 
import { getAuth } from "@clerk/nextjs/server"; // dans les routes API pour notamment proteger les routes de personnes non authentifie

const AuthContext = createContext(undefined);

