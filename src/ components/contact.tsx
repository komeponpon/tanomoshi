// ContactForm.tsx
/*
import { Box, Button, Container, FormControl, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// ダークテーマの設定
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // 背景色を設定
    },
  },
});

// フォームの型
type ContactForm = {
  name: string;
  email: string;
  message: string;
};

// バリデーションルール
const schema = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup
    .string()
    .required('必須項目です')
    .email('正しいメールアドレス入力してください'),
  message: yup
    .string().required('必須項目です'),
});

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  // フォーム送信時の処理（バリデーションOKな時に実行される）
  const onSubmit: SubmitHandler<ContactForm> = async (data: any) => {
    const response = await fetch("api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      router.push("/thanks");
    } else {
      alert("正常に送信できませんでした");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
          <Box>
            <FormControl fullWidth  sx={{ maxWidth: '600px' }}>
              <Stack spacing={5} direction="column">
                <TextField variant="outlined" required label="お名前" {...register('name')} error={'name' in errors} helperText={errors.name?.message} />
                <TextField variant="outlined" required label="メールアドレス" type="email" {...register('email')} error={'email' in errors} helperText={errors.email?.message} />
                <TextField variant="outlined" required label="問い合わせ内容" multiline rows={6} {...register('message')} error={'message' in errors} helperText={errors.message?.message} />
              </Stack>
              <Stack alignItems="center" mt={5}>
                <Button color="primary" variant="contained" size="large" sx={{ width: '200px' }} onClick={handleSubmit(onSubmit)}>
                  送信
                </Button>
              </Stack>
            </FormControl>
          </Box>
          <Box height="20vh"></Box>
    </ThemeProvider>
  );
};

export default Contact;
*/
