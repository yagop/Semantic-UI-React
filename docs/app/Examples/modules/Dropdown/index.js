import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'semantic-ui-react'

const DropdownExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Dropdown'
        description='A dropdown menu'
        examplePath='modules/Dropdown/Types/Dropdown'
      />
      <ComponentExample
        title='Custom Trigger'
        description='A dropdown can use a custom trigger element'
        examplePath='modules/Dropdown/Types/Trigger'
      />
      <ComponentExample
        examplePath='modules/Dropdown/Types/ImageTrigger'
      />
      <ComponentExample
        title='Uncontrolled'
        description='A dropdown works as an uncontrolled component'
        examplePath='modules/Dropdown/Types/Uncontrolled'
      >
        <Message>
          See React form docs for an explanation of
          <a href='https://facebook.github.io/react/docs/forms.html' target='_blank'>
            &nbsp;controlled and uncontrolled&nbsp;
          </a>
          component patterns.
        </Message>
      </ComponentExample>
      <ComponentExample
        title='Selection'
        description='A dropdown can be used to select between choices in a form'
        examplePath='modules/Dropdown/Types/Selection'
      >
        <Message info>
          Selection dropdowns must use the <code>options</code> prop, instead of sub component markup.
        </Message>
      </ComponentExample>
      <ComponentExample
        title='Allow Additions'
        description='A dropdown that allows user additions'
        examplePath='modules/Dropdown/Types/AllowAdditions'
      >
        <Message className='info'>
          The <code>allowAdditions</code> prop requires you to handle updating the options list
          with the new value via the <code>onAddItem</code> prop.
        </Message>
      </ComponentExample>
    </ExampleSection>
    <ExampleSection title='Content'>
      <ComponentExample
        title='Header'
        description='A dropdown menu can contain a header'
        examplePath='modules/Dropdown/Content/Header'
      />
    </ExampleSection>
    <ExampleSection title='States'>
      <ComponentExample
        title='Disabled'
        description='A disabled dropdown menu or item does not allow user interaction'
        examplePath='modules/Dropdown/States/Disabled'
      />
      <ComponentExample
        examplePath='modules/Dropdown/States/DisabledItem'
      />
    </ExampleSection>
  </div>
)

export default DropdownExamples
