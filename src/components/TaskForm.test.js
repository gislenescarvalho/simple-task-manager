import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskForm from './TaskForm';

describe('TaskForm', () => {
  test('shows error message when submitting empty title', () => {
    const mockOnSave = jest.fn();
    render(<TaskForm onSave={mockOnSave} />);

    fireEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(mockOnSave).not.toHaveBeenCalled();
    expect(screen.getByText('Title is required')).toBeInTheDocument();
  });

  test('calls onSave when title is provided', () => {
    const mockOnSave = jest.fn();
    render(<TaskForm onSave={mockOnSave} />);

    fireEvent.change(screen.getByPlaceholderText(/enter task title/i), { target: { value: 'New Task' } });
    fireEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(mockOnSave).toHaveBeenCalledWith({ title: 'New Task' });
    expect(screen.queryByText('Title is required')).not.toBeInTheDocument();
  });
});
