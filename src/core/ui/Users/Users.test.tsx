import {render, screen} from '@testing-library/react'
import {Users} from './Users'

const usersListFixture = [
    {
        email: 'viacheslav@test.test',
        name: 'Viacheslav',
        nickname: 'Hitriy',
        phone: '+38096969696',
        photo: 'viacheslav.jpg',
        position: 'Middle React Developer',
    },
    {
        email: 'nikita@test1.test',
        name: 'Nikita',
        nickname: 'Developer',
        phone: '+380963333333',
        photo: 'Nikita.jpg',
        position: 'Lead React Developer',
    },
    {
        email: 'sergiy@test.test',
        name: 'Sergiy',
        nickname: 'Designer',
        phone: '+380922222222',
        photo: 'sergiy.jpg',
        position: 'UI/UX Designer',
    },
    {
        email: 'angelina@test.test',
        name: 'Angelina',
        nickname: 'Backend',
        phone: '+380911111111',
        photo: 'angelina.jpg',
        position: 'Junior Backend Developer',
    },
]

describe('Users component', () => {
    test('should render 3 users if prop.users.length > 0 && prop.expendedView = false and render all after button "View all" was clicked', () => {
        render(<Users
            users={usersListFixture}
            setUser={() => {}}
            expendedView={false}
        />)

        expect(screen.getByText('Viacheslav')).toBeInTheDocument()
        expect(screen.getByText('Nikita')).toBeInTheDocument()
        expect(screen.getByText('Sergiy')).toBeInTheDocument()
    })

    test('should render all users if prop.users.length > 0 && prop.expendedView = true', () => {
        render(<Users
            users={usersListFixture}
            setUser={() => {}}
            expendedView={true}
        />)

        expect(screen.getByText('Viacheslav')).toBeInTheDocument()
        expect(screen.getByText('Nikita')).toBeInTheDocument()
        expect(screen.getByText('Sergiy')).toBeInTheDocument()
        expect(screen.getByText('Angelina')).toBeInTheDocument()
    })

    test('should not render users if prop.users.length = 0', () => {
        render(<Users
            users={[]}
            setUser={() => {}}
            expendedView={false}
        />)

        expect(screen.queryByText('Viacheslav')).not.toBeInTheDocument()
    })
})
