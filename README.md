
# rn-otp-code

`rn-otp-code` is a customizable OTP (One-Time Password) input component for React Native. It provides an easy-to-use and flexible way to capture OTP codes in your React Native applications.

## Features

- Customizable OTP length
- Flexible styling options for border, background, and placeholder
- Auto-focusing and seamless input handling
- Support for numeric keyboard and one-time code auto-fill

## Installation

To install the package, run:

```bash
npm install rn-otp-code
```

or

```bash
yarn add rn-otp-code
```

## Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import OtpInput from 'rn-otp-code';

export default function App() {
  const handleOtpChange = (otp: string) => {
    console.log('OTP:', otp);
  };

  return (
    <View style={{ padding: 20 }}>
      <OtpInput
        length={6}
        onOtp={handleOtpChange}
        borderColor="black"
        filledBorderColor="green"
        backgroundColor="#D9D9D9"
        filledBackgroundColor="#D9D9D9"
        placeHolderText="-"
      />
    </View>
  );
}
```

## Props

| Prop                  | Type       | Default       | Description                                             |
| --------------------- | ---------- | ------------- | ------------------------------------------------------- |
| `length`              | `number`   | `6`           | Number of digits in the OTP                             |
| `onOtp`               | `function` | `() => {}`    | Callback when the OTP is fully entered                  |
| `borderColor`         | `string`   | `'black'`     | Border color of the OTP input cells                     |
| `filledBorderColor`   | `string`   | `'green'`     | Border color of the OTP cells when filled               |
| `backgroundColor`     | `string`   | `'#D9D9D9'`   | Background color of the OTP input cells                 |
| `filledBackgroundColor` | `string`   | `'#D9D9D9'`   | Background color of the OTP cells when filled           |
| `placeHolderText`     | `string`   | `'-'`         | Placeholder text for empty OTP cells                    |

## Styling

The component provides several props to customize the appearance of the OTP input fields. You can set custom colors for borders, background, and placeholder text.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you have any issues or feature requests, please open an issue on [GitHub](https://github.com/Marwan-Daghbadj/rn-otp-code/issues).

## Author

Daghbadj Marwan - [daghbadjmarwan@gmail.com](mailto:daghbadjmarwan@gmail.com)
<br/>
<a href="https://www.mar1-dev.com/" target="_blank">https://www.mar1-dev.com/</a>

## Acknowledgements

This library was inspired by the need for a simple and customizable OTP input component in React Native projects.

## Issues
Tell us more about your issue <a href="https://github.com/Marwan-Daghbadj/rn-otp-code/issues/1">here</a>
