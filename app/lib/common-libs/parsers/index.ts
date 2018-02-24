// Source file from duniter: Crypto-currency software to manage libre currency such as Ğ1
// Copyright (C) 2018  Cedric Moreau <cem.moreau@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

import {BlockParser} from "./block"
import {CertificationParser} from "./certification"
import {IdentityParser} from "./identity"
import {MembershipParser} from "./membership"
import {PeerParser} from "./peer"
import {RevocationParser} from "./revocation"
import {TransactionParser} from "./transaction"

export const parsers = {
  parseIdentity:      new IdentityParser(),
  parseCertification: new CertificationParser(),
  parseRevocation:    new RevocationParser(),
  parseTransaction:   new TransactionParser(),
  parsePeer:          new PeerParser(),
  parseMembership:    new MembershipParser(),
  parseBlock:         new BlockParser()
}
