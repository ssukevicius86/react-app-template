import React, { FC } from 'react',
import { Layout, PageBlock } from 'vtex.styleguide.css'

const AdminExample: FC = () => {
    return (
      <Layout>
        <PageBlock  title="Titulo" subtitle="Alguma explicacion" variation="full">
          <h1>Hello, World!</h1>
        </PageBlock>
      </Layout>
    )
  
}

export default AdminExample