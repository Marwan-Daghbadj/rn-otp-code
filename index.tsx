import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

interface OtpInputProps {
  length?: number;
  onOtp?: (otp: string) => void;
  borderColor?: string;
  filledBorderColor?: string;
  backgroundColor?: string;
  filledBackgroundColor?: string;
  placeHolderText?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onOtp = () => {},
  borderColor = "black",
  filledBorderColor = "green",
  backgroundColor = "#D9D9D9",
  filledBackgroundColor = "#D9D9D9",
  placeHolderText = "-",
}) => {
  const [otp, setOtp] = useState<string>("");

  const handleTextChange = (text: string) => {
    const filteredText = text.replace(/[^0-9]/g, "");

    if (filteredText.length <= length) {
      setOtp(filteredText);
    }
    if (filteredText.length === length) {
      onOtp(filteredText);
    }
  };

  return (
    <>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          value={otp}
          onChangeText={handleTextChange}
          maxLength={length}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
        />
        <View style={styles.otpCellsContainer}>
          {[...Array(length)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.otpCell,
                {
                  borderColor:
                    otp.length >= index + 1 ? filledBorderColor : borderColor,
                  backgroundColor:
                    otp.length >= index + 1
                      ? filledBackgroundColor
                      : backgroundColor,
                },
              ]}
            >
              <Text style={styles.otpCellValue}>
                {otp[index] || placeHolderText}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  otpInput: {
    fontSize: 50,
    width: "100%",
    opacity: 0,
  },
  otpCellsContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 5,
    pointerEvents: "none",
  },
  otpCell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: 2,
    maxHeight: 60,
  },
  otpCellValue: {
    color: "black",
    fontSize: 20,
  },
});

export default OtpInput;
