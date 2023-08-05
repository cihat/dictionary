'use client';

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Container from "../ui/container";
import { useWord } from "@/store/useWord";
import YouglishWidget from "./youglish";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import * as z from "zod"
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { randomAlphabet, randomNumberFromRange } from "@/lib/utils";


const formSchema = z.object({
  wordCount: z.coerce.number().min(1).max(100),
  wordLength: z.coerce.number().min(1).max(100),
  firstLetter: z.string().length(1),
  alphabetize: z.boolean(),
})


export default function Words() {
  const { words, setRandomWords } = useWord();
  const [word, setWord] = useState('')
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      wordCount: randomNumberFromRange(1, 20),
      wordLength: randomNumberFromRange(2, 10),
      firstLetter: randomAlphabet(),
      alphabetize: true
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setRandomWords(values.wordCount, values.wordLength, values.firstLetter, values.alphabetize);
  }


  useEffect(() => {
    setRandomWords(randomNumberFromRange(1, 20), randomNumberFromRange(2, 10), form.getValues('firstLetter'), true);
  }, [])

  return (
    <Container as="main" size="full" className="flex sm:flex-row flex-col justify-between sm:justify-evenly h-[600px]">
      <div className="flex flex-col max-w-[50%] mr-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="wordCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Word Count</FormLabel>
                  <FormControl>
                    <Input placeholder="Word Count" {...field} />
                  </FormControl>
                  <FormDescription>
                    How many words do you want to generate?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wordLength"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Word Length</FormLabel>
                  <FormControl>
                    <Input placeholder="Word Length" {...field} />
                  </FormControl>
                  <FormDescription>
                    How long do you want the words to be?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstLetter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Letter</FormLabel>
                  <FormControl>
                    <Input placeholder="First Letter" {...field} />
                  </FormControl>
                  <FormDescription>
                    What letter do you want the words to start with?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alphabetize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-2">Alphabetize</FormLabel>
                  <FormControl>
                    <Checkbox checked={true} />
                  </FormControl>
                  <FormDescription>
                    Do you want the words to be alphabetized?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <br />

        <h1 className="font-bold text-lg mb-2">Words</h1>
        <ul className="grid grid-cols-1 gap-2 lg:grid-cols-4 xl:grid-cols-8">
          {words ? words?.map((word, index) => (
            <li key={index}>
              <Button onClick={() => setWord(word)}>{word}</Button>
            </li>
          )) : null}
        </ul>
      </div>

      <YouglishWidget className="flex-grow mt-4 sm:mt-0 max-w-[50%] ml-auto" word={word} firstLetter={form.getValues('firstLetter')} />
    </Container>
  )
}

