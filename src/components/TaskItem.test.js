import { getTodosInfo } from "../services/todosAPI";

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Adjust the path according to your file structure
import TaskItem from './TaskItem';

jest.mock('../services/todosAPI');

describe('TaskItem', () => {
    const mockTask = { id: 1, title: 'Test Task' };
    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();
  
    beforeEach(() => {
        getTodosInfo.mockResolvedValue(mockTask);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
  
    test('calls onEdit with the correct task when Edit button is clicked', async () => {
      render(<TaskItem task={{ id: 1, title: 'Test Task' }} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
  
      await screen.findByText('Test Task');
  
      fireEvent.click(screen.getByText('Edit'));
      expect(mockOnEdit).toHaveBeenCalledWith(mockTask);
    });
  
    test('calls onDelete with the correct task id when Delete button is clicked', async () => {
      render(<TaskItem task={{ id: 1, title: 'Test Task' }} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
  
      await screen.findByText('Test Task');
  
      fireEvent.click(screen.getByText('Delete'));
      expect(mockOnDelete).toHaveBeenCalledWith(mockTask.id);
    });
  });