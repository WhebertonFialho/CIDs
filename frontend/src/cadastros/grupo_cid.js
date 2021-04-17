import * as React from 'react';
import {
    Show, ShowButton, ListButton, SimpleShowLayout,
    List, Datagrid, TextField, TopToolbar, TextInput, Filter
} from 'react-admin';

const GrupoCIDActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const GrupoCIDFilter = props => (
    <Filter {...props}>
        <TextInput label="Pesquisar" source="q" alwaysOn />
    </Filter>
);

export const GrupoCIDList = props => (
    <List {...props} filters={<GrupoCIDFilter />}>
        <Datagrid>
            <TextField source="id" label="ID" />
            <TextField source="descricao" label="Descrição" />
            <ShowButton />
        </Datagrid>
    </List>
);

export const GrupoCIDShow = props => (
    <Show {...props} actions={<GrupoCIDActions />} >
        <SimpleShowLayout>
            <TextField source="id" label="ID"/>
            <TextField source="descricao" label="Descrição" />
        </SimpleShowLayout>
    </Show>
);
