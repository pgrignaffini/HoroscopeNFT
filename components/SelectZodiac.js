import React from 'react'
import { Select, Icon } from 'web3uikit'

export default function SelectZodiac({ setZodiacSign }) {
    return (
        <Select
            label="Select your zodiac sign"
            width='250px'
            onChange={(option) => setZodiacSign(option.id)}
            options={[
                {
                    id: 'Aries',
                    label: 'Aries',
                    prefix: '♈️'
                },
                {
                    id: 'Taurus',
                    label: 'Taurus',
                    prefix: '♉️'
                },
                {
                    id: 'Gemini',
                    label: 'Gemini',
                    prefix: '♊️'
                },
                {
                    id: 'Cancer',
                    label: 'Cancer',
                    prefix: '♋️'
                },
                {
                    id: 'Leo',
                    label: 'Leo',
                    prefix: '♌️'
                },
                {
                    id: 'Virgo',
                    label: 'Virgo',
                    prefix: '♍️'
                },
                {
                    id: 'Libra',
                    label: 'Libra',
                    prefix: '♎️'
                },
                {
                    id: 'Scorpio',
                    label: 'Scorpio',
                    prefix: '♏️'
                },
                {
                    id: 'Sagittarius',
                    label: 'Sagittarius',
                    prefix: '♐️'
                },
                {
                    id: 'Capricorn',
                    label: 'Capricorn',
                    prefix: '♑️'
                },
                {
                    id: 'Aquarius',
                    label: 'Aquarius',
                    prefix: '♒️'
                },
                {
                    id: 'Pisces',
                    label: 'Pisces',
                    prefix: '♓️'
                },
            ]}
        />
    )
}
