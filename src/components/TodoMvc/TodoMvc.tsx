import { css, styled } from '@/lib/styles'
import { FC, useState } from 'react'

const styles = {
  wrapper: css({ display: 'flex' }),
}

const button = {
  wrapper: css({
    display: 'flex',
    backgroundColor: '$ubie-black-100',
    width: 100,
    paddingInline: 4,
    paddingBlock: 2,
    '&:hover': {
      cursor: 'pointer',
    },
    variants: {
      color: {
        primary: {
          backgroundColor: '$background-primary',
        },
        secondary: {
          backgroundColor: '$background-accent',
        },
      },
    },
  }),
}

export const Button: FC<{
  color: 'primary' | 'secondary'
  onClick: () => void
}> = ({ color, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={button.wrapper({
        color,
      })}
    >
      ぼたん
    </button>
  )
}

const Button2 = styled('button', {
  color: 'red',
  backgroundColor: '',
})

export const TodoMvc: FC = () => {
  const [color, setColor] = useState<'primary' | 'secondary'>('primary')

  return (
    <div>
      <h1 className={styles.wrapper()}>yaa</h1>
      <Button
        color={color}
        onClick={() => {
          setColor((prev) => {
            return prev === 'primary' ? 'secondary' : 'primary'
          })
        }}
      />
    </div>
  )
}
