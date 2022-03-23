#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""The setup script."""
#  Copyright 2022 Datoms Protocol Foundation
#  SPDX-License-Identifier: Apache-2.0

from setuptools import find_packages, setup

with open('README.md') as readme_file:
    readme = readme_file.read()

with open('CHANGELOG.md') as history_file:
    history = history_file.read()

install_requirements = [
    'kopf',
    'kubernetes',
    'web3',
    'psycopg2',
    'eth_account'
]

setup_requirements = ['pytest-runner==2.11.1', ]

dev_requirements = [
    'bumpversion==0.5.3',
    'pkginfo==1.4.2',
    'twine==1.11.0',
    # not virtualenv: devs should already have it before pip-installing
    'watchdog==0.8.3',
]

test_requirements = [
    'codacy-coverage==1.3.11',
    'coverage==4.5.1',
    'mccabe==0.6.1',
    'pylint==2.2.2',
    'pytest==3.4.2',
    'tox==3.2.1',
]

setup(
    author="jerry.zhang",
    author_email='jerry.zhang.bill@gamil.com',
    classifiers=[
        'Development Status :: alpha -2 ',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: Apache Software License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
    ],
    description="Datomspod infra",
    extras_require={
        'test': test_requirements,
        'dev': dev_requirements + test_requirements,
    },
    include_package_data=True,
    install_requires=install_requirements,
    keywords='datomspod',
    license="Apache Software License 2.0",
    long_description=readme,
    long_description_content_type="text/markdown",
    name='datomspod',
    packages=find_packages(include=['datomspod']),
    setup_requires=setup_requirements,
    test_suite='tests',
    tests_require=test_requirements,
    url='https://github.com/atomsbeijing',
    version='1.0.0',
)