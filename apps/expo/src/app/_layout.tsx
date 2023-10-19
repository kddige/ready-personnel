import React from "react";
import Constants from "expo-constants";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ClerkProvider } from "@clerk/clerk-expo";

import { TRPCProvider } from "~/utils/api";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={
        Constants.expoConfig?.extra?.clerkPublishableKey as string
      }
    >
      <TRPCProvider>
        {/*
        The Stack component displays the current page.
        It also allows you to configure your screens 
      */}
        <Stack />
        <StatusBar />
      </TRPCProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
