import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { StripeProvider } from "@stripe/stripe-react-native";

const App: () => Node = () => {

  return (
    // <StripeProvider publishableKey="pk_test_51KiIlrEoaocwBYAEmpGX0pkNXUhHEP6kyP5MZH7aqucDnfoBWX0WpcULeI52XCcwCNkBgKW0BVICU1STE2aNhjsK00zogjKx1a">
      <SafeAreaView>
        <Text>Stripe works</Text>
      </SafeAreaView>
    // </StripeProvider>
  );
};

export default App;
