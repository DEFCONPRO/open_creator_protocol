/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category MigrateToMpl
 * @category generated
 */
export const migrateToMplStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'MigrateToMplInstructionArgs'
)
/**
 * Accounts required by the _migrateToMpl_ instruction
 *
 * @property [] policy
 * @property [] freezeAuthority
 * @property [_writable_] mint
 * @property [_writable_] metadata
 * @property [_writable_] mintState
 * @property [_writable_, **signer**] from
 * @property [_writable_] fromAccount
 * @property [_writable_] edition
 * @property [] cmtProgram
 * @property [] instructions
 * @property [] metadataProgram
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category MigrateToMpl
 * @category generated
 */
export type MigrateToMplInstructionAccounts = {
  policy: web3.PublicKey
  freezeAuthority: web3.PublicKey
  mint: web3.PublicKey
  metadata: web3.PublicKey
  mintState: web3.PublicKey
  from: web3.PublicKey
  fromAccount: web3.PublicKey
  edition: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  cmtProgram: web3.PublicKey
  instructions: web3.PublicKey
  metadataProgram: web3.PublicKey
  payer: web3.PublicKey
}

export const migrateToMplInstructionDiscriminator = [
  111, 238, 79, 93, 215, 148, 36, 242,
]

/**
 * Creates a _MigrateToMpl_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category MigrateToMpl
 * @category generated
 */
export function createMigrateToMplInstruction(
  accounts: MigrateToMplInstructionAccounts,
  programId = new web3.PublicKey('ocp4vWUzA2z2XMYJ3QhM9vWdyoyoQwAFJhRdVTbvo9E')
) {
  const [data] = migrateToMplStruct.serialize({
    instructionDiscriminator: migrateToMplInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.policy,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.freezeAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mintState,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.from,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.fromAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.edition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.cmtProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.instructions,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
