/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { InitPolicyArg, initPolicyArgBeet } from '../types/InitPolicyArg'

/**
 * @category Instructions
 * @category InitPolicy
 * @category generated
 */
export type InitPolicyInstructionArgs = {
  arg: InitPolicyArg
}
/**
 * @category Instructions
 * @category InitPolicy
 * @category generated
 */
export const initPolicyStruct = new beet.FixableBeetArgsStruct<
  InitPolicyInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['arg', initPolicyArgBeet],
  ],
  'InitPolicyInstructionArgs'
)
/**
 * Accounts required by the _initPolicy_ instruction
 *
 * @property [_writable_] policy
 * @property [**signer**] authority
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category InitPolicy
 * @category generated
 */
export type InitPolicyInstructionAccounts = {
  policy: web3.PublicKey
  authority: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const initPolicyInstructionDiscriminator = [
  45, 234, 110, 100, 209, 146, 191, 86,
]

/**
 * Creates a _InitPolicy_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitPolicy
 * @category generated
 */
export function createInitPolicyInstruction(
  accounts: InitPolicyInstructionAccounts,
  args: InitPolicyInstructionArgs,
  programId = new web3.PublicKey('mtokYxNhZEihbDq3r6LX22pLKnpuQvXV5kwhgCDCWw4')
) {
  const [data] = initPolicyStruct.serialize({
    instructionDiscriminator: initPolicyInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.policy,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
