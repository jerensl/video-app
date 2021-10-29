/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Home from '../pages/index'

const renderComponent = () => {
    const utils = render(<Home />)

    const input = utils.getByLabelText('room-input') as HTMLInputElement

    return {
        input,
        ...utils,
    }
}

test('renders a heading', () => {
    const { getByRole } = renderComponent()

    const heading = getByRole('heading', {
        name: /Join A Meeting/i,
    })

    expect(heading).toBeInTheDocument()
})

test('insert room id', () => {
    const { input } = renderComponent()

    fireEvent.change(input, { target: { value: '1234' } })
    expect(input.value).toBe('1234')
})
