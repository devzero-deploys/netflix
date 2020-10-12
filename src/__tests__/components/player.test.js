import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Player from '../../components/Player';

describe('<Player />', _ => {
    it('renders the <Player /> with a bunny video', _ => {
        const { container, getByText, queryByTestId, debug } = render(
            <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
            </Player>
        );

        expect(queryByTestId('player')).toBeFalsy();
        fireEvent.click(getByText('Play'));

        expect(queryByTestId('player')).toBeTruthy();
        fireEvent.click(getByText('Play'));

        expect(queryByTestId('player')).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });
});