import React from 'react';
import ReactDOM from 'react-dom';
import { checkFigureType } from '../InputChecker';

describe('When incorrect input', () => {
    it('returns error if empty input', () => {
        const callCheckFigureType = () => {
            checkFigureType([]);
        }
    
        expect(callCheckFigureType).toThrowError('Incorrect input');
    });

    it('returns error if the input contains not valid numbers', () => {
        const callCheckFigureType = () => {
            checkFigureType(['a', 2, 3]);
        }
    
        expect(callCheckFigureType).toThrowError('Invalid numbers');
    });

    it('returns error if the input contains negative numbers', () => {
        const callCheckFigureType = () => {
            checkFigureType([1.2, -4, 5]);
        }
    
        expect(callCheckFigureType).toThrowError('All values must positive');
    });

    it('returns error if the figure is not valid', () => {
        const callCheckFigureType = () => {
            checkFigureType([100, 1, 1]);
        }
    
        expect(callCheckFigureType).toThrowError('The figure is not valid');
    });
});

describe('When correct input', () => {
    it('returns "Equilateral" if all the sides are equal', () => {
        const result = checkFigureType([42, 42, 42]);
    
        expect(result.triangleType).toEqual('Equilateral');
    });

    it('returns "Isosceles" if two of the sides are equal but the other is different', () => {
        const result = checkFigureType([40, 42, 42]);
    
        expect(result.triangleType).toEqual('Isosceles');
    });

    it('returns "Scalene" if all the sides are equal', () => {
        const result = checkFigureType([3, 4, 5]);
    
        expect(result.triangleType).toEqual('Scalene');
    });
});
