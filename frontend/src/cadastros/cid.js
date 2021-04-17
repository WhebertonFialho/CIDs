import * as React from 'react';
import {
    Show, ShowButton, ListButton, SimpleShowLayout, ReferenceInput, ReferenceField,
    List, Datagrid, TextField, TopToolbar, TextInput, Filter, SelectInput
} from 'react-admin';

const CIDActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
    </TopToolbar>
);

const CIDFilter = props => (
    <Filter {...props}>
        <TextInput label="Pesquisar" source="q" alwaysOn />
        <ReferenceInput label="Grupo" source="id" reference="grupo_cid" allowEmpty>
            <SelectInput optionText="descricao" />
        </ReferenceInput>
    </Filter>
);

export const CIDList = props => (
    <List {...props} filters={<CIDFilter />}>
        <Datagrid>
            <TextField source="id" label="ID" />
            <TextField source="descricao" label="Descrição" />
            <ReferenceField label="Grupo" source="grupo.id" reference="grupo_cid">
                <TextField source="descricao" />
            </ReferenceField>
            <ShowButton />
        </Datagrid>
    </List>
);

export const CIDShow = props => (
    <Show {...props} actions={<CIDActions />} >
        <SimpleShowLayout>
            <TextField source="id" label="ID"/>
            <TextField source="descricao" label="Descrição" />
        </SimpleShowLayout>
    </Show>
);
