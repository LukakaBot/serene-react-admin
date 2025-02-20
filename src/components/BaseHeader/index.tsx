import type { FC, CSSProperties } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const headerStyle: CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 48,
	lineHeight: '64px',
	backgroundColor: '#4096ff',
};

const BaseHeader: FC = () => <Header style={headerStyle}>Header</Header>;

export default BaseHeader;
