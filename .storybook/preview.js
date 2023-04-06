import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import '../styles/style.css';

export default {
	parameters: {
		controls: { expanded: true },
		docs: {
			page: () => (
				<>
					<Title/>
					<Subtitle/>
					<Description/>
					<Primary/>
					<Controls/>
					<Stories includePrimary={false}/>
				</>
			)
		},
		layout: 'centered',
		options: {
			storySort: {
				order: ['Introduction', 'Tree', 'AnimatedTree']
			}
		},
		viewMode: 'docs'
	}
};