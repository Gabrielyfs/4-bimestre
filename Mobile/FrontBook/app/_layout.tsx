import { Stack } from "expo-router"

// configuração para fazer navegação entre as páginas
export default function RootLayout() {
    return <Stack screenOptions={{headerShown: false}}/>
}