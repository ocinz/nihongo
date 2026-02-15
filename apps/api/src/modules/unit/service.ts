import { prisma } from "../../utils/prisma.js";
import type { createUnitSchema, updateUnitSchema } from "./schema";

export async function createunit(data: createUnitSchema) {
	return prisma.unit.create({
		data,
		select: {
			id: true,
			name: true,
			created_at: true,
		},
	});
}

export async function getUnits(userId?: string) {
	return prisma.unit.findMany({
		where: userId ? { userId } : undefined,
		select: {
			id: true,
			name: true,
			created_at: true,
		},
	});
}

export async function updateUnits(id: string, data: updateUnitSchema) {
	return prisma.unit.update({
		where: { id },
		data,
		select: {
			id: true,
			name: true,
			created_at: true,
		},
	});
}

export async function deleteUnits(id: string) {
	return prisma.unit.delete({
		where: { id },
		select: {
			id: true,
		},
	});
}
