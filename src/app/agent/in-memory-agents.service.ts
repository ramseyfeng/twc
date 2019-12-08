import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryAgentsService implements InMemoryDbService {
  createDb() {
    const agents =         [
        {
          name: 'bjstdmngbdr01.thoughtworks.com',
          os: 'windows',
          status: 'idle',
          type: 'physical',
          ip: '192.168.1.102',
          path: '/var/lib/cruise-agent',
          resources: [
            'Firefox',
            'Safari',
            'Ubuntu',
            'Chrome'
          ],
          id: 1
        },
        {
          name: 'bjstdmngbdr08.thoughtworks.com',
          os: 'windows',
          status: 'building',
          type: 'virtual',
          ip: '192.168.1.80',
          path: '/var/lib/cruise-agent',
          resources: [
            'Firefox',
            'Safari',
            'Ubuntu',
            'Chrome'
          ],
          id: 2
        },
        {
          name: 'bjstdmngbdr10.thoughtworks.com',
          os: 'ubuntu',
          status: 'building',
          type: 'physical',
          ip: '192.168.1.117',
          path: '/var/lib/cruise-agent',
          resources: [
            'Firefox',
            'Safari',
            'Ubuntu',
            'Chrome'
          ],
          id: 3
        },
        {
          name: 'bjstdmngbdr11.thoughtworks.com',
          os: 'debian',
          status: 'building',
          type: 'virtual',
          ip: '192.168.1.106',
          path: '/var/lib/cruise-agent',
          resources: [
            'Firefox',
            'Safari',
            'Ubuntu',
            'Chrome'
          ],
          id: 4
        },
        {
          name: 'bjstdmngbdr15.thoughtworks.com',
          os: 'suse',
          status: 'idle',
          type: 'virtual',
          ip: '192.168.1.110',
          path: '/var/lib/cruise-agent',
          resources: [
            'Firefox',
            'Safari',
            'Chrome',
            'Ubuntu'
          ],
          id: 5
        },
        {
          name: 'bjstdmngbdr02.thoughtworks.com',
          os: 'centos',
          status: 'idle',
          type: 'virtual',
          ip: '192.168.1.103',
          path: '/var/lib/cruise-agent',
          resources: [
            'Firefox',
            'Safari',
            'Ubuntu',
            'Chrome'
          ],
          id: 6
        },
        {
          name: 'bjstdmngbdr06.thoughtworks.com',
          os: 'suse',
          status: 'idle',
          type: 'physical',
          ip: '192.168.1.113',
          path: '/var/lib/cruise-agent',
          resources: [
            'Firefox',
            'Safari',
            'Ubuntu',
            'Chrome'
          ],
          id: 7
        },
      {
        name: 'bjstdmngbdr07.thoughtworks.com',
        os: 'suse',
        status: 'idle',
        type: 'physical',
        ip: '192.168.1.116',
        path: '/var/lib/cruise-agent',
        resources: [
          'Firefox',
          'Safari',
          'Ubuntu',
          'Chrome',
          'Opera'
        ],
        id: 7
      }
      ];
    return {agents};
  }
}
