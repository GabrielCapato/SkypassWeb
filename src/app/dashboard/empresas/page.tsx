'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import CustomButton from '@/components/CustomButton';
import { containerVariants, itemVariants } from '@/config/animations';
import { useSidebarState } from '@/hooks/useSidebarState';

const EmpresasPage = () => {
  const router = useRouter();
  const isSidebarExpanded = useSidebarState();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full"
    >
      <motion.div 
        variants={itemVariants} 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Empresas
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gerencie suas empresas cadastradas
          </p>
        </div>
        <CustomButton
          variant="primary"
          onClick={async () => {
            await router.push('/dashboard/empresas/cadastro');
          }}
          className="w-full sm:w-auto"
        >
          Nova Empresa
        </CustomButton>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6"
      >
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          Nenhuma empresa cadastrada
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmpresasPage; 