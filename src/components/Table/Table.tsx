import React from 'react';
import { TableItem } from './types.d';
import * as Styled from './styles';

const Table = ({items }: { items: TableItem[]}) => {
    if (!items || items?.length === 0) {
        return null;
    }

    return (
        <Styled.Container>
            {
                items.map(item => (
                    <Styled.Row key={`${item.label}-${item.value}`}>
                        <Styled.Cell>{ item.label && <Styled.Label>{ item.label }</Styled.Label>}</Styled.Cell>
                        <Styled.Cell>{ item.value && <Styled.Value>{ item.value }</Styled.Value>}</Styled.Cell>
                    </Styled.Row>
                ))
            }
        </Styled.Container>
    );
};

export default Table;