"use client"

import "./App.css";
import DrawerAppBar from "./components/drawerAppBar";
import {AppProvider} from "./providers/appProvider";
import SimpleBackdrop from "./components/backdrop";
import App from "./App";
import AidaProvider from "./providers/aidaProvider";
// import {AidaProvider} from "aida-chatbot";

export default function RootLayout({
                                       children
                                   }: any) {
    const endPoint = "https://esp-services-dataoffering-openai-uksouth.openai.azure.com/";
    const azureApiKey = "bd17a73f46a348b1b73a1d97c4eab3bb"
    const deploymentId = "gpt-4-1106-preview";

    return (
        <AppProvider>
            <AidaProvider credentials={
                {endPoint, azureApiKey, deploymentId}
            }>
                <SimpleBackdrop />
                <DrawerAppBar />
                <App />
            </ AidaProvider>
        </AppProvider>
    );
}
