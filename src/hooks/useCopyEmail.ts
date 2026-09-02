import { useClipboard, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { EMAIL } from '../constants/profile';

export const useCopyEmail = () => {
  const { onCopy } = useClipboard(EMAIL);
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();

  const handleCopyEmail = () => {
    onCopy();
    setIsCopied(true);
    toast({
      title: 'Correo copiado',
      description: 'El correo ha sido copiado al portapapeles.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });

    setTimeout(() => setIsCopied(false), 10000);
  };

  return { isCopied, handleCopyEmail };
};
